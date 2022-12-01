// Add your scripts here

const tabs = document.getElementById('tabcontrol').getElementsByTagName('a');
const pages = document.getElementById('tabbody').getElementsByTagName('div');

function changeTab() {
	const targetid = this.href.substring(this.href.indexOf('#') + 1, this.href.length);
	for (let i = 0; i < pages.length; i += 1) {
		if (pages[i].id !== targetid) {
			pages[i].style.display = 'none';
		} else {
			pages[i].style.display = 'block';
		}
		for (let j = 0; i < tabs.length; j += 1) {
			tabs[j].style.zIndex = '0';
		}
		this.style.zIndex = '7';
	}
}
for (let i = 0; i < tabs.length; i += 1) {
	tabs[i].addEventListner('click', changeTab);
}

tabs[0].addEventListner('click', changeTab);
