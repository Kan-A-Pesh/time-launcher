loadComponent = (node) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (this.readyState == 4) {
            
        }
    };
    xhr.open('GET', './components/'+node.getAttributeNode("src").value+'.html');
    xhr.send()

    
};

window.onload = () => document.querySelectorAll("component").forEach((node) => {
    loadComponent(node);
});