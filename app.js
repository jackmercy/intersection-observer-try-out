// { threshold: 0.3,  rootMargin: '0px', }
// Welcome section - Blur example
const welcomeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('animation-text', entry.isIntersecting);
    });
}, { threshold: 0.5 });

const welcomeText = document.querySelector('.welcome-text');

welcomeObserver.observe(welcomeText);

// list section - stagger example
const listObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('animation-stagger', entry.isIntersecting);
    });
});

const listEl = document.querySelectorAll('.list-stagger .col-item');

listEl.forEach((el) => listObserver.observe(el));

// bottom up text example
const goToDocsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('animation-bottom-text', entry.isIntersecting);
    });
})
const goToDocsEl = document.querySelector('.go-to-docs');
goToDocsObserver.observe(goToDocsEl);

// pop out example
const popOutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target.classList.contains('left')) {
            entry.target.classList.toggle('pop-out-left-animate', entry.isIntersecting);
        } else if (entry.target.classList.contains('right')) {
            entry.target.classList.toggle('pop-out-right-animate', entry.isIntersecting);
        }
    });
});

const popOutEls = document.querySelectorAll('.pop-out');
popOutEls.forEach(el => popOutObserver.observe(el));

// navbar active
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            console.log(`current index is ${index}`);
            tabs.forEach(tab => {
                tab.classList.remove('activeTab', !entry.isIntersecting);
            })
            tabs[index].classList.add('activeTab', entry.isIntersecting);
        }
    });
}, {
    threshold: 0.5,
});

sections.forEach(el => navObserver.observe(el));