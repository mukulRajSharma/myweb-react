import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  // AppTasks,
  // AppNewsUpdate,
  AppOrderTimeline,
  // AppCurrentVisits,
  // AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  // AppConversionRates,
} from '../sections/@dashboard/app';
import Typewriter from 'typewriter-effect';

// ----------------------------------------------------------------------

export default function About() {
  const theme = useTheme();

  return (
    <Page title="About">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome
        </Typography>
        
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('My name is Mukul.')
              .pauseFor(2500)
              .deleteAll()
              .start();
            
            typewriter.typeString('I am a final year Computer Engineering student @ UNSW.')
              .pauseFor(2500)
              .deleteAll()
              .start();

            typewriter.typeString('If you would like to get in touch contact me using the Contact section of this website :)')
              .pauseFor(2500)
              .start();
          }}
        />

        <Grid container spacing={3} my={1}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Life Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Legend will FINISH Uni',
                  'Legend started Uni',
                  'Legend FINISHED School',
                  'Legend had to go to School',
                  'Legend was born',
                ][index],
                type: [
                  `secondary`,
                  `success`,
                  `secondary`,
                  `secondary`,
                  `secondary`,
                ][index],
                time: [
                  '2022-08-24T00:00:00.000',
                  '2018-07-23T00:00:00.000',
                  '2018-06-01T00:00:00.000',
                  '2003-04-01T00:00:00.000',
                  '2000-08-01T00:00:00.000',
                ][index],
                icon: [
                  'hat',
                  'start',
                ][index]
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Language Proficiency"
              chartLabels={['Python', 'C', 'C++', 'VHDL', 'ReactJs', 'Java', 'Go', 'SQL']}
              chartData={[
                { name: 'Skill level', data: [90, 70, 50, 50, 70, 90, 40, 70] },
                // { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                // { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>
{/* 
          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Find Me"
              list={[
                {
                  name: 'GitHub',
                  value: 'https://www.github.com/mukulRajSharma',
                  icon: <Iconify icon={'eva:github-fill'} color="#24292F" width={32} height={32} />,
                },
                {
                  name: 'LinkedIn',
                  value: 'https://www.linkedin.com/in/mukul-raj-sharma',
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'HackerRank',
                  value: 'https://www.hackerrank.com/mukul02015',
                  icon: <Iconify icon={'cib-hackerrank'} color="#2BBE5E" width={32} height={32} />,
                },
                {
                  name: 'Chess',
                  value: 'https://www.chess.com/member/jerry8tom',
                  icon: <Iconify icon={'fa-solid:chess-pawn'} color="#24292F" width={32} height={32} />,
                },
                {
                  name: 'Telegram',
                  value: 'https://t.me/mickeyM0us',
                  icon: <Iconify icon={'fa-telegram'} color="#0E8AC7" width={32} height={32} />,
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Check list for no reason"
              list={[
                { id: '1', label: 'Study' },
                { id: '2', label: 'Work' },
                { id: '3', label: 'Wash clothes' },
                { id: '4', label: 'Groceries' },
                { id: '5', label: 'Eat' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
