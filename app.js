// init github

const github = new GitHub;

// init UI 

const ui = new UI;

// Search Input

const searchUser = document.querySelector('#searchUser');

// Search Input event listener 
searchUser.addEventListener('keyup', (e) => {
    // GET USER TEXT 
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
               if (data.profile.message === 'Not Found'){
                // Show Alert 
                ui.showAlert('User Not Found!', 'alert alert-danger')
               } else {
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos) 
               }
            })
    } else {
        // clear Profile 
        ui.clearProfile()
    }
});