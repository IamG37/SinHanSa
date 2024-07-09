<script>
    import { RES, state } from '../state';

    let res = $RES;

    const MoEv = () => {
        $state = 0;
    }
</script>

<style>
    .bbd {
        overflow: hidden; /* Prevent overflow */
        margin: 0; /* Remove default body margin */
    }
    #bb {
        position:absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(24, 24, 24, 0.9); /* Set background color with opacity */
    }

    .container {
        background-color: #181818;
        color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 30px; /* Increase gap for more spacing between boxes */
        z-index: 3;
        position: relative;
        top: 20px;
        width: 100%;
        height: calc(100vh - 40px); /* Adjust height to fit within the viewport */
        overflow-y: auto; /* Enable vertical scrolling */
        box-sizing: border-box;
    }

    .box {
        background-color: #282828;
        padding: 20px; /* Increase padding for better spacing */
        border-radius: 10px; /* Increase border radius for better aesthetics */
        overflow: hidden;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 10px; /* Increase gap between elements */
    }

    .box h3 {
        margin: 0 0 10px 0; /* Add margin to separate from content */
        font-size: 1.5em; /* Increase font size for better readability */
    }

    .box p {
        margin: 5px 0;
        line-height: 1.5; /* Increase line height for better readability */
    }

    .box .count {
        font-weight: bold;
    }

    .close-button_div {
        font-size: 18px;
        text-align: left;
        position: relative;
        top: 10px;
        left: 10px;
        z-index: 3; /* Ensure close button is above the overlay */
    }

    .close-button {
        cursor: pointer;
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        padding: 10px 15px;
    }

    .close-button:hover {
        background-color: #ff4500;
    }
</style>

<div class="bbd">
    <div id="bb"></div>
    <div class="close-button_div">
        <button class="close-button" on:click={MoEv}>Main</button>
    </div>
    <div class="container">
        {#each $RES as item}
            <div class="box">
                <h3>{item.title}</h3>
                <p>{item.value}</p>
                <p>{item.explain}</p>
                <p class="count"><strong>검색수:</strong> {item.count}</p>
            </div>
        {/each}
    </div>
</div>
