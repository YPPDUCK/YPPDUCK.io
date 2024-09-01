function loadContent(section) {
    fetch('content.txt')
        .then(response => response.text())
        .then(text => {
            const content = text.split('---');
            let sectionContent = '';
            switch(section) {
                case 'autobiography':
                    sectionContent = content[0];
                    break;
                case 'study-plan':
                    sectionContent = content[1];
                    break;
                case 'research-plan':
                    sectionContent = content[2];
                    break;
                case 'work-achievements':
                    sectionContent = content[3];
                    break;
                case 'other-experiences':
                    sectionContent = content[4];
                    break;
            }
            document.getElementById('content').innerHTML = sectionContent;
        });
}

function toggleSubItems(sectionId) {
    const subList = document.getElementById(sectionId);
    if (subList.style.display === "none" || subList.style.display === "") {
        subList.style.display = "block";
    } else {
        subList.style.display = "none";
    }
}
