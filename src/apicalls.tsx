const getTopHeadlines = () => {
    return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=7f8240dd6302413ea7b13ea4ad88642d")
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      };
      
      return res.json()
    })
    .catch(err => console.log(err))
}

export default getTopHeadlines;
