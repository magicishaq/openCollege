const URL = 'http://leads.beta.openstudycollege.info/getTopLeads'

var promise = fetch(URL)

promise.then((response, reject) => response.json()).then(data => {
    
    var random = Math.floor(Math.random() * data.length);
    var user = data[random];
    const theName = user.name;
    const studentStatus = user.studentID
        ? "Student"
        : "Employee"
    const id = user.studentID
        ? user.studentID
        : user.id;
    const enStatus = user.status;
    const completedCourses = user.phase_id;
    const email = user.email;
    const tel = user.tel ? user.tel : 'Not available'; 
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
    })
})


//function to change the card contents
function changeCard(item, id) {
    document
        .getElementById(id)
        .innerHTML = item;
}

function changePhoto(item, id) {
    document.getElementById(id).src = item 
}