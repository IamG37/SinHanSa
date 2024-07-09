<script>
    import { auth } from '$lib/firebase';
    import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
    import { onMount } from 'svelte';
    import { state } from '../lib/state';

    console.log($state);

    import Main from '../lib/Pages/main.svelte';
    import Add from '../lib/Pages/add.svelte';
    import Search from '../lib/Pages/search.svelte';

  let user = null;
  let loading = true;

  onMount(() => {
      onAuthStateChanged(auth, (firebaseUser) => {
          user = firebaseUser;
          loading = false; // Set loading to false once the auth state is determined
      });
  });

  const signIn = async () => {
      const provider = new GoogleAuthProvider();
      try {
          await signInWithPopup(auth, provider);
      } catch (error) {
          console.error('Error signing in:', error);
      }
  };

  const logOut = async () => {
      try {
          await signOut(auth);
      } catch (error) {
          console.error('Error signing out:', error);
      }
  };
</script>

<main>
    {#if loading}
      <div class="loading-screen">
          [ Developer : G37 ]
      </div>
    {:else}
      {#if user}
        {#if $state == 0} 
            <Main />
        {:else if $state == 1}
            <Add />
        {:else if $state == 2}
            <Search />
        {/if}
      {:else}
          <div id="L_body">
              <div class="login-container">
                  <h1>로그인</h1>
                  <button on:click={signIn}>Google</button>
              </div>
          </div>
          {/if}
    {/if}
</main>

<style>
  main {
      text-align: center;
      margin: 0 auto;
  }

  #L_body {
      background-color: #181818;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
      color: white;
      width: 100vw;
      height: 100vh;
  }

  .login-container {
      text-align: center;
      padding: 20px;
      border-radius: 10px;
      background-color: #202020;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      width: 40vw;
  }

  .login-container h1 {
      margin-bottom: 20px;
  }

  .login-container button {
      width: 50%;
      padding: 10px;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      background-color: white;
      color: black;
      font-size: 16px;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease;
  }

  .login-container button:hover {
      background-color: #f1f1f1;
  }

  .loading-screen {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #181818;
      color: white;
      font-size: 24px;
  }
</style>
