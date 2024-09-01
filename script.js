// Load content based on section
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

// Toggle visibility of sub-list items
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

// Set active state for sidebar items
function setActive(itemClass) {
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => {
        if (item.classList.contains(itemClass)) {
            item.classList.add('active'); // 添加active類別
        } else {
            item.classList.remove('active'); // 移除active類別
        }
    });
}

// Scroll to main content when logo is clicked
document.getElementById('logo').addEventListener('click', () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' }); // 滾動到主內容
});
