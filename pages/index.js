import MeetupList from "../components/meetups/MeetupList";
import Layout from '../components/layout/Layout'

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetups",
    image:
      "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
    addrees: "alRawdatain",
    description: "hi",
  },
  {
    id: "m2",
    title: "A second Meetups",
    image:
      "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
    addrees: "alRawdatain",
    description: "hi",
  },
  {
    id: "m3",
    title: "A 3th Meetups",
    image:
      "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
    addrees: "alRawdatain",
    description: "hi",
  },
];

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}
export default HomePage;
