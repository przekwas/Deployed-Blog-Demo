import { Query } from '../index';

const getBlogTags = async (blogid: number) => Query(`SELECT t.id, t.name FROM blogtags bt JOIN tags t ON t.id = bt.tagid WHERE bt.blogid = ${blogid};`);

const insert = async (values: Array<Number>) => Query(`INSERT INTO blogtags (blogid, tagid) VALUE (?)`, values);

const destroy = async (blogid: number) => Query(`DELETE FROM blogtags WHERE blogid = ${blogid}`);

export default {
    getBlogTags,
    insert,
    destroy
}