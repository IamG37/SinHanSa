<script>
    import { addDoc, collection } from 'firebase/firestore';
    import { db } from '../firebase'; // Ensure the correct path to your Firebase configuration
    import { state } from '../state'; // Ensure the correct path to your state management

    let title = '';
    let value = '';
    let explain = '';
    let isSubmitting = false;
    let errorMessage = '';

    const handleSubmit = async () => {
        if (!title || !value || !explain) {
            errorMessage = 'All fields are required!';
            return;
        }

        isSubmitting = true;
        errorMessage = '';

        try {
            await addDoc(collection(db, 'datas'), {
                title,
                value,
                explain,
                count: 0 // Initialize count to 0
            });

            title = '';
            value = '';
            explain = '';
            $state = 0; // Close the form after submission
        } catch (error) {
            console.error('Error adding document: ', error);
            errorMessage = 'Error adding document!';
        } finally {
            isSubmitting = false;
        }
    };

    const handleCancel = () => {
        title = '';
        value = '';
        explain = '';
        errorMessage = '';
        $state = 0; // Close the form without submission
    };
</script>

<style>
    .form-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #181818;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: Arial, sans-serif;
        padding: 20px;
        box-sizing: border-box;
    }
    .form-content {
        background-color: #282828;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 90%;
        max-width: 700px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-label {
        display: block;
        margin-bottom: 5px;
        font-size: 18px;
    }
    .form-input {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
    }
    .form-input:focus {
        outline: none;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
    .form-buttons {
        display: flex;
        justify-content: space-between;
    }
    .form-button {
        background-color: #ff6347;
        color: white;
        border: none;
        border-radius: 10px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 18px;
    }
    .form-button:hover {
        background-color: #ff4500;
    }
    .cancel-button {
        background-color: #555;
    }
    .cancel-button:hover {
        background-color: #333;
    }
    .error-message {
        color: #ff6347;
        font-size: 16px;
        margin-bottom: 10px;
    }
</style>

<div class="form-container">
    <div class="form-content">
        <div class="form-group">
            <label class="form-label" for="title">Title</label>
            <input class="form-input" type="text" id="title" bind:value={title} />
        </div>
        <div class="form-group">
            <label class="form-label" for="value">Value</label>
            <input class="form-input" type="text" id="value" bind:value={value} />
        </div>
        <div class="form-group">
            <label class="form-label" for="explain">Explain</label>
            <input class="form-input" type="text" id="explain" bind:value={explain} />
        </div>
        {#if errorMessage}
            <div class="error-message">{errorMessage}</div>
        {/if}
        <div class="form-buttons">
            <button class="form-button" on:click={handleSubmit} disabled={isSubmitting}>Submit</button>
            <button class="form-button cancel-button" on:click={handleCancel}>Cancel</button>
        </div>
    </div>
</div>
