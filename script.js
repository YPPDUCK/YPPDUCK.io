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
                default:
                    sectionContent = '<p>內容未找到</p>';
                    break;
            }
            document.getElementById('content').innerHTML = sectionContent;
        })
        .catch(error => console.error('Error loading content:', error));
}

function toggleSubItems(sectionId) {
    console.log(`Toggling section: ${sectionId}`); // 調試信息
    const subLists = document.querySelectorAll('.sub-list');
    subLists.forEach(list => {
        if (list.id !== sectionId) {
            list.style.display = 'none'; // 收起其他子項目列表
        }
    });

    const subList = document.getElementById(sectionId);
    if (subList) {
        if (subList.style.display === "none" || subList.style.display === "") {
            subList.style.display = "block";
        } else {
            subList.style.display = "none";
        }
    }
}

function setActive(itemClass) {
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => {
        if (item.classList.contains(itemClass)) {
            item.style.backgroundColor = '#ff7f00'; // 選中顏色
            item.style.color = '#1a1a1a'; // 選中文本顏色
        } else {
            item.style.backgroundColor = '#333333'; // 非選中顏色
            item.style.color = '#f2f2f2'; // 非選中文本顏色
        }
    });
}

document.getElementById('logo').addEventListener('click', () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' }); // 滾動到主內容
});
