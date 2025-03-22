const currentYear = document.querySelector('#currentYear');
lastModified = document.querySelector('#lastModified');

const today = new Date();
let lastModified = new Date(document.lastModified);
full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

currentYear.innerHTML = `getFullYear(): ${today.getFullYear()}`;