export class Article {
    title: string;
    link: string;
    votes: number;
    display_vote: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;  // Se non viene passato un valore per i voti, inizializza con 0
        this.display_vote = this.votes >= 0 ? this.votes : 0; 
    }
    voteUp(): void {
        this.votes += 1;
        this.display_vote = this.votes < 0 ? 0 : this.votes;
        console.log(this.votes)
    }

    voteDown(): void {
        this.votes -= 1;
        this.display_vote = this.votes < 0 ? 0 : this.votes;
        console.log(this.votes)
    }
    
    // domain() is a utility function that extracts

    domain(): string | null {
        try {// e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1]; // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        }catch (err) {
            return null;
        }
    }
}