<script>
    import { onMount } from 'svelte';
    import { auth } from '$lib/firebase';
    import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
    import { db } from '../firebase';
    import { collection, query, orderBy, limit, getDocs, where, updateDoc, doc } from 'firebase/firestore';
    import logo from "./logo.png";
    import { state, Title, RES } from '../state';

    let searchHistory = [];
    let showHistory = false;
    let showModal = false;
    let searchTerm = '';
    let isComposing = false;

    let res = [];
    let exactMatch = null;

    let Value = '';
    let Explain = '';
    let Count = 0;
    let modalMessage = '';

    let UserEmail = '';

    onMount(() => {
        fetchTopTitles();
    });

    const getUserEmail = () => {
        return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user.email);
            } else {
                reject('No user is signed in');
            }
        });
        });
    };

    getUserEmail()
        .then(email => UserEmail = email)
        .catch(error => console.error(error));

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    function handleButtonClick() {
        $state = 1;
    }

    async function TopClickEV(t) {
        showHistory = false;
        const result = await getDataByTitle(t);
        res = result.matches;
        exactMatch = result.exactMatch;
        console.log(res);

        if (!exactMatch) {
            modalMessage = '값이 없음!';
            $Title = '';
            Value = '';
            Explain = '';
            Count = 0;
        } else {
            $Title = exactMatch.title;
            Value = exactMatch.value;
            Explain = exactMatch.explain;
            Count = exactMatch.count + 1;
            modalMessage = '';
            incrementCount($Title);
        }
        showModal = true;
    }

    async function handleSearch(event) {
        if (!isComposing && event.key === 'Enter') {
            searchTerm = event.target.value.trim();
            if (searchTerm) {
                addSearchToHistory(searchTerm);
                event.target.value = '';
                showHistory = false;
                const result = await getDataByTitle(searchTerm);
                res = result.matches;
                exactMatch = result.exactMatch;
                console.log(res);

                if (!exactMatch) {
                    modalMessage = '값이 없음!';
                    $Title = '';
                } else {
                    $Title = exactMatch.title;
                    Value = exactMatch.value;
                    Explain = exactMatch.explain;
                    Count = exactMatch.count + 1;
                    modalMessage = '';
                    incrementCount($Title);
                    $state = 2;
                }
                
                showModal = true;
            }
        }
    }

    async function incrementCount(t) {
        try {
            const q = query(collection(db, "datas"), where("title", "==", t));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach(async (document) => {
                const docRef = doc(db, "datas", document.id);
                const currentCount = document.data().count || 0;
                await updateDoc(docRef, {
                    count: currentCount + 1
                });
                console.log(`Document with ID ${document.id} updated successfully`);
            });

            if (querySnapshot.empty) {
                console.log("No matching documents found.");
            }
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }

    function addSearchToHistory(term) {
        searchHistory = [term, ...searchHistory.filter(item => item !== term)];
        if (searchHistory.length > 3) {
            searchHistory.pop();
        }
    }

    function handleFocus() {
        showHistory = true;
    }

    function handleBlur() {
        // Delay hiding the history to allow click event to register
        setTimeout(() => (showHistory = false), 100);
    }

    function closeModal() {
        showModal = false;
    }

    function handleHistoryClick(term) {
        document.getElementById("sb").value = term;
        showHistory = false;
    }

    let titles = [];

    async function fetchTopTitles() {
        try {
            const q = query(collection(db, 'datas'), orderBy('count', 'desc'), limit(3));
            const querySnapshot = await getDocs(q);
            titles = querySnapshot.docs.map(doc => doc.data().title);
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    }

    async function getDataByTitle(ti) {
        const datasCollection = collection(db, 'datas');
        const q = query(datasCollection, where('title', '>=', ti), where('title', '<=', ti + '\uf8ff'));
        const querySnapshot = await getDocs(q);

        const results = [];
        let exactMatch = null;
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            results.push(data);
            if (data.title === ti) {
                exactMatch = data;
            }
        });
        $RES = results;
        return { exactMatch, matches: results };
    }
</script>
<style>
    #condiv {
        background-color: #181818;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        margin: 0;
        color: #fff;
        font-family: Arial, sans-serif;
        position: relative;
    }
    .logo_img {
        position: relative;
        top: -30px;
        width: 150px; /* 로고 이미지 너비 조정 */
        margin-top: 50px; /* 로고 이미지의 상단 마진 조정 */
    }
    .search-container {
        top: -30px;
        width: 50%;
        max-width: 600px;
        min-width: 300px;
        margin-top: 20px; /* 검색창 상단 마진 조정 */
        position: relative;
    }
    .search-bar {
        width: 90%;
        padding: 15px;
        border: none;
        border-radius: 30px;
        font-size: 18px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .search-bar:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    .search-history {
        position: absolute;
        top: 50px;
        width: 100%;
        background-color: #282828;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    .history-item {
        padding: 10px;
        cursor: pointer;
    }
    .history-item:hover {
        background-color: #383838;
    }
    .ranking-list {
        width: 90%;
        text-align: center;
        font-size: 18px;
        margin-top: auto;
        margin-bottom: 20px;
    }
    .ranking-item {
        background-color: #282828;
        padding: 10px;
        margin: 5px 0;
        border-radius: 0px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ranking-item:hover {
        background-color: #383838;
    }
    .top-right-button {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .top-right-button2 {
        position: absolute;
        top: 70px;
        right: 20px;
        background-color: #835eff;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .top-right-button:hover {
        background-color: #ff4500;
    }
    .loading-screen {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #181818;
        color: #fff;
        font-size: 24px;
        z-index: 1000;
    }
    .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        z-index: 1001;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background-color: #181818;
        border-radius: 15px;
        padding: 40px;
        color: white;
        width: 90%;
        max-width: 700px;
        text-align: center;
    }
    .modal-explain {
        font-size: 20px;
        margin-bottom: 30px;
    }
    .close-button {
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 15px 30px;
        cursor: pointer;
        font-size: 18px;
    }
    .close-button:hover {
        background-color: #ff4500;
    }
</style>





<div id="condiv">
    <img class="logo_img" src={logo} alt="logo" />

    {#if UserEmail == "apple.geonppang37@gmail.com"}
        <button class="top-right-button" on:click={handleButtonClick}>추가</button>
    {/if}
    <button class="top-right-button2" on:click={logOut}>로그아웃</button>
    <div class="search-container">
        <input type="text" autocomplete='off' id="sb" class="search-bar" placeholder="검색..." value={searchTerm} on:input={(e) => searchTerm = e.target.value} on:keydown={handleSearch} on:focus={handleFocus} on:blur={handleBlur} on:compositionstart={() => isComposing = true} on:compositionend={() => isComposing = false}>
        {#if showHistory && searchHistory.length > 0}
            <div class="search-history">
                {#each searchHistory as item}
                    <div class="history-item" on:click={() => handleHistoryClick(item)}>{item}</div>
                {/each}
            </div>
        {/if}
    </div>
    <div class="ranking-list">
        <h3>실시간 랭킹 TOP3</h3>
        {#each titles as title}
            <div class="ranking-item" on:click={TopClickEV(title)}>{title}</div>
        {/each}
    </div>
    {#if showModal}
        <div class="modal-background" on:click={closeModal}>
            <div class="modal" on:click|stopPropagation>
                {#if !exactMatch}
                    <div class="modal-explain">아직 추가되지 않은 단어입니다..</div>
                {/if}
                <button class="close-button" on:click={closeModal}>Close</button>
            </div>
        </div>
    {/if}
</div>

