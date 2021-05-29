class GitHub {
    constructor() {
        this.client_id = '13e24f52bb283b252445';
        this.client_secret = 'e5ed22c4a44ca1e7a9c4d885303dde5716883b7b';
        this.repos_count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();    
        return {
            profile,
            repos
        }
    }
}