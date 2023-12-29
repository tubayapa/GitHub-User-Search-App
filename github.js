class Github {
  constructor() {
    this.client_id = "6b96087034ce39d23162";
    this.client_secret = "a032a1818f70dbcf7a86f91748559f9103a8ee9b";
    this.repos_count = 10;
    this.repos_sort = "asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    console.log(repos);

    return { profile, repos };

    console.log(err);
  }
}

export default Github;
