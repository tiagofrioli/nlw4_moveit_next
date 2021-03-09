import React from "react";

import { Countdown } from "../components/Countdown/Countdown";
import {ExperienceBar} from '../components/ExperienceBar/ExperienceBar';
import { Profile } from "../components/Profile/Profile";
import styles from '../styles-global/pages/Home.module.css';
import { GetServerSideProps } from 'next'
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { CountdownProvider } from "../context/CountdownContext";
import { ChallengesProvider } from "../context/ChallengeContext";
import CompletedChallenge from "../components/CompletedChallenges/CompletedChallenge";


interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted} >
    <div className={styles.container}>
      <Head>
        <title>Início | moveit</title>
      </Head>
        <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenge />
            <Countdown />
          </div>
          <div>
             <ChallengeBox /> 
          </div>
        </section>
        </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {


  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;
  return {
    props: {
      level: Number(level), currentExperience: Number(currentExperience), challengesCompleted: Number(challengesCompleted)
    }
  }
}