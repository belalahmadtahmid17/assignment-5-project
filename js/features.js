document.getElementById('blog-btn').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "blog.html"
})


sectionHandler('donation-btn','donation-section');

sectionHandler('history-btn','history-section');


function sectionHandler(btnID, sectionID){
const btn =  document.getElementById(btnID);
const section = document.getElementById(sectionID);

btn.addEventListener('click',function(event){
    event.preventDefault(); 

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    section.classList.remove('hidden');

    document.getElementById('donation-btn').classList.add('border-gray-300')
    document.getElementById('donation-btn').classList.add('border-[2px]')
    document.getElementById('donation-btn').classList.remove('bg-lime-300')
    
    document.getElementById('history-btn').classList.add('border-gray-300')
    document.getElementById('history-btn').classList.add('border-[2px]')
    document.getElementById('history-btn').classList.remove('bg-lime-300')

    btn.classList.add('bg-lime-300')
    btn.classList.remove('border-gray-300');
    btn.classList.remove('border-[2px]');

})
}
