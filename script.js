const URL = 'http://leads.beta.openstudycollege.info/getTopLeads'

var promise = fetch(URL)

promise.then((response, reject) => response.json()).then(data => {

    var random = Math.floor(Math.random() * data.length);
    var user = data[random];
    const theName = user.name;
    const studentStatus = user.studentID
        ? "Employee"
        : "Student"
    const id = user.studentID
        ? user.studentID
        : user.id;
    const enStatus = user.status;
    const completedCourses = user.phase_id;
    const email = user.email;
    const tel = user.tel
        ? user.tel
        : 'Not available';
    const aboutMe = `About Me <li> ${user.name} is studying </li> <li>  ${user.course_title} and thier enquiry is : </li> <li>  ${user.enquiry} </li> `
    const currentCourse = user.course_title;
    return {
        theName,
        studentStatus,
        id,
        enStatus,
        completedCourses,
        email,
        tel,
        aboutMe,
        currentCourse
    }

}).then(({
    theName,
    studentStatus,
    id,
    enStatus,
    completedCourses,
    email,
    tel,
    aboutMe,
    currentCourse
}) => {
    //fill in the card

    changeCard(theName, 'theName')
    changeCard(studentStatus, 'studentStatus')
    changeCard(id, 'id')
    changeCard(enStatus, 'enStatus')
    changeCard(completedCourses, 'completedCourses')
    changeCard(email, 'email')
    changeCard(tel, 'tel')
    changeCard(aboutMe, 'aboutMe')
    changeCard(currentCourse, 'currentCourse')

}).then(() => {
    const URL = 'https://dog.ceo/api/breeds/image/random/5'
    //get the picture details
    fetch(URL).then(data => {
        return data.json()
    }).then(({message, status}) => {
        return message
    }).then(([profile, mainPic, bannerPic, smallPicOne, smallPicTwo]) => {
        //change the pictures
        changePhoto(profile, 'iprofile')
        changePhoto(mainPic, 'imainPic')
        changePhoto(bannerPic, 'ibannerPic')
        changePhoto(smallPicOne, 'ismallPicOne')
        changePhoto(smallPicTwo, 'ismallPicTwo')
    }).then(showCard)
}).then(addEvents)

//function to change the card contents
function changeCard(item, id) {
    document
        .getElementById(id)
        .innerHTML = item;
}

function changePhoto(item, id) {
    document
        .getElementById(id)
        .src = item
}

function showCard() {
    document
        .querySelector('.cardContainer')
        .classList
        .remove('hide');

    //hide the loading
    document
        .querySelector('.homepage')
        .classList
        .add('hide');
}

function addEvents() {
    //close button
    const close = document.getElementById('closeButton');
    const card = document.querySelector('.cardContainer');
    const modal = document.querySelector('#showModal');
    const galleryButton = document.querySelector('.photoItem');
    const gallery = document.querySelector('.photoGrid'); 

    const icon =  document.querySelector('#galleryButton'); 

    document.addEventListener('click', function (event) {
        if (event.target === close || event.target === modal) {
            card
                .classList
                .toggle('hide');
            showModal.classList.toggle('hide'); 
            
        }

        if(event.target === galleryButton || event.target === icon){

            gallery.classList.toggle('hide')
            icon.classList.toggle('fa-chevron-down') //remove down icon
            icon.classList.toggle('fa-chevron-up') //add up icon
           
        } 


        //slider button change loading text to show show button
    })

}