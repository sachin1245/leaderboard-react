import UserDetail from './UserDetail';

import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

const user = {
    name: "Sachin",
    credits: 300,
    avatar: 'https://images.unsplash.com/photo-1602502070119-c2a1fd7432a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'

};

describe("", () => {
    it("accepts user props", () => {
        const wrapper = mount(<UserDetail user={user} />);
        expect(wrapper.props().user).toEqual(user);
    });
    it("contains users name", () => {
        const wrapper = mount(<UserDetail user={user} />);
        const value = wrapper.find(".user-detail-name").text();
        expect(value).toEqual("Sachin");
    });

    it("contains users credits", () => {
        const wrapper = mount(<UserDetail user={user} />);
        const value = wrapper.find(".user-detail-credit").text();
        expect(value).toEqual("300");
    });

    it("displays all users fields", () => {
        const wrapper = mount(<UserDetail user={user} index={0} />);
        expect(wrapper.find("td")).toHaveLength(4);
    });
});