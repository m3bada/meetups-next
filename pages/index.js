/** @format */

import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { fragment } from "react";
import { Head } from "next/head";

function HomePage(props) {
  return (
    <fragment>
      <head>
        <title>
          Meetups
        </title>
        <meta name="description" content="a meetups website "/>
      </head>
      <MeetupList meetups={props.meetups} />;
    </fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://m3bada:RdYB4wx2n6jdqQD@cluster0.cvrv7.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
export default HomePage;
