function newDocument() {
    if (confirm('Are you sure you want to create a new document? Unsaved changes will be lost.')) {
        document.getElementById('textArea').value = '';
    }
}

function openDocument() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';
    fileInput.onchange = event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                document.getElementById('textArea').value = e.target.result;
            };
            reader.readAsText(file);
        }
    };
    fileInput.click();
}

function saveDocument() {
    const text = document.getElementById('textArea').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'document.txt';
    a.click();
    URL.revokeObjectURL(a.href);
}

function changeFont() {
    const font = document.getElementById('fontSelect').value;
    document.getElementById('textArea').style.fontFamily = font;
}

function changeFontSize() {
    const fontSize = document.getElementById('fontSizeSelect').value;
    document.getElementById('textArea').style.fontSize = fontSize;
}

function toggleBold() {
    const textArea = document.getElementById('textArea');
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
    } else {
        textArea.style.fontWeight = 'bold';
    }
}

function toggleItalic() {
    const textArea = document.getElementById('textArea');
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
    } else {
        textArea.style.fontStyle = 'italic';
    }
}