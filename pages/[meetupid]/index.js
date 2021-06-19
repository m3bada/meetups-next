/** @format */

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms"
      title="A First Meetup"
      address=" some where 5 st "
      description=" the meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
        },
      {}
    ],
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  console.log(meetupid);
  return {
    props: {
      meetupData: {
        id: meetupid,
        image: "https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms",
        title: "A First Meetup",
        address: " some where 5 st ",
        description: " the meetup",
      },
      },
      
  };
}

export default MeetupDetails;
