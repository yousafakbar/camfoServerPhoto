function validateForm() {
    let name = document.getElementById("name").value;
    for (i = 0; i < name.length; i++) {
        ch = name.charAt(i);
        if (!(ch == 'a' && ch == 'z') || !(ch == 'A' && ch == 'Z') || !(ch == ' ')) {
            alert('invalid name');
            return false;
        }
    }
    return true;
}