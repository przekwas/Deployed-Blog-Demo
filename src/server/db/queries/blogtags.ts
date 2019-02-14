import { Query } from '../index';

const getBlogTags = async (blogid: number) => Query(`SELECT t.name FROM blogtags bt JOIN tags t ON t.id = bt.tagid WHERE bt.blogid = ${blogid};`);

export default {
    getBlogTags
}