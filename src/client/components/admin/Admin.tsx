import * as React from 'react';
import { json, User } from '../../utils/api';
import { RouteComponentProps } from 'react-router-dom';

class Admin extends React.Component<IAdminProps, IAdminState> {

    constructor(props: IAdminProps) {
        super(props);
        this.state = {
            title: null,
            body: null,
            saveStatus: null
        };
    }

    private alert: JSX.Element = null;
    private saving: boolean = false;

    componentDidMount() {
        if (!User || User.userid === null || User.role !== 'admin') {
            this.props.history.replace('/login');
        }
    }

    async handleBlogSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (this.saving) return;

        let blog: { authorid: number, title: string, body: string } = {
            authorid: User.userid,
            title: this.state.title,
            body: this.state.body
        };

        try {
            this.saving = true;
            let result = await json('/api/blogs', 'POST', blog);
            if (result) {
                this.setState({
                    title: '',
                    body: '',
                    saveStatus: 'success'
                });
            } else {
                this.setState({ saveStatus: 'error' });
            }
        } catch (e) {
            this.setState({ saveStatus: 'error' });
            throw e;
        } finally {
            this.saving = false;
        }

    }

    render() {

        if (this.state.saveStatus === 'success') {
            this.alert = <div className='alert alert-success p-1 m-3' role='alert'>Blog Added</div>
        } else if (this.state.saveStatus === 'error') {
            this.alert = <div className='alert alert-danger p-1 m-3' role='alert'>Error Adding Blog</div>
        }

        return (
            <main className="container">
                <section className="row my-3">
                    <div className="col-md-12">
                        <form
                            className="form-group border border-primary rounded shadow-lg p-3"
                            onSubmit={(e) => this.handleBlogSubmit(e)}
                        >
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control p-1 mb-1"
                                placeholder="Enter a title .."
                                value={this.state.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ title: e.target.value })} />
                            <label>Content</label>
                            <textarea
                                rows={5}
                                className="form-control p-1 mb-1"
                                placeholder="Write your blog .."
                                value={this.state.body}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ body: e.target.value })} />
                            <button
                                type="submit"
                                className="btn btn-warning d-block border border-primary mt-2 p-2 shadow">Submit Blog</button>
                                {this.alert}
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

interface IAdminProps extends RouteComponentProps { }

interface IAdminState {
    title: string;
    body: string;
    saveStatus: string;
}

export default Admin;