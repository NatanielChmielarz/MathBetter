<script>
  export let text;
  export let disabled;
  export let onClick;
</script>

<button on:click={onClick} disabled={disabled}>{text}</button>
<style>
  button {
    background-color: #f99248;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  button:hover {
    background-color: #e87020;
  }
</style>