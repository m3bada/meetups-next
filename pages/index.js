/** @format */

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetups",
    image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
    address: "alRawdatain",
    description: "abada ",
  },
  {
    id: "m2",
    title: "A second Meetups",
    image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
    address: "alRawdatain",
    description: "hi",
  },
  {
    id: "m3",
    title: "A 3th Meetups",
    image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
    address: "alRawdatain",
    description: "hi",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
export default HomePage;
