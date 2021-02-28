import React from "react";
import { CompletedChallenge } from "../components/CompletedChallenges/CompletedChallenge";
import { Countdown } from "../components/Countdown/Countdown";
import {ExperienceBar} from '../components/ExperienceBar/ExperienceBar';
import { Profile } from "../components/Profile/Profile";
import styles from '../styles-global/pages/Home.module.css';

import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | moveit</title>
      </Head>
        <ExperienceBar />

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
    </div>
  )
}
