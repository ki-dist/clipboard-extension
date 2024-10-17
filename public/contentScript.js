
document.addEventListener('keydown', async (e) => {
  if (e.ctrlKey && e.key === 'c') {
    try {
      const dataToCopy = "Copied from Clipboard Extension";
      await navigator.clipboard.writeText(dataToCopy);
      console.log('Copied to clipboard:', dataToCopy);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  if (e.ctrlKey && e.key === 'v') {
    try {
      const pastedText = await navigator.clipboard.readText();
      console.log('Pasted from clipboard:', pastedText);
      alert('Pasted text: ' + pastedText);
    } catch (err) {
      console.error('Failed to paste:', err);
    }
  }
});

