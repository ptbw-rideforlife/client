import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../simple-library';
import { MobileContainer, MobileButton } from '../../simple-library-mobile' 

const About = props => {
    //styles
    const aboutContainer = {
      height: '2500px',
      backgroundColor: 'f5f5f5',
      overflowY: 'scroll'
    }

    const aboutContainerMobile = {
      height: '3800px',
      backgroundColor: 'f5f5f5'
    }

    const headerContainer = {
      backgroundImage: 'url("https://images.unsplash.com/photo-1534470717-233b39a41c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      width: '100vw',
      height: '660px',
      opacity: '0.8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
    }

    const headerContainerMobile = {
      backgroundImage: 'url("https://images.unsplash.com/photo-1534470717-233b39a41c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      width: '100vw',
      height: '500px',
      opacity: '0.8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
    }

    const body = {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }

    const bigBox = {
      width: '80%',
      height: '400px',
      display: 'flex',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '30px 0',
      borderRadius: '10px'
    }

    const bigBoxMobile = {
      width: '80%',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '10px 0',
      borderRadius: '10px'
    }

    const teamBox = {
      width: '80%',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '30px 0',
      borderRadius: '10px'
    }

    const teamBoxMobile = {
      width: '80%',
      height: '1400px',
      display: 'flex',
      flexDirection: 'column',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '10px 0',
      borderRadius: '10px'
    }

    const header = {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }

    const headerMobile = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const secondary = {
      width: '50%'
    }

    const secondaryMobile = {
      width: '100%',
      marginTop: '10px'
    }

    const header1 = {
      width: '50vw',
      color: '#4f6d7a',
      fontSize: '70px',
      textAlign: 'left',
      fontWeight: '700',
      backgroundColor: '#f5f5f5',
      padding: '30px 20px',
      margin: '300px 0 0 0', 
      borderRadius: '0 5px 5px 0'
    }

    const header1Mobile = {
      width: '100vw',
      color: '#4f6d7a',
      fontSize: '50px',
      textAlign: 'left',
      fontWeight: '700',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      margin: '200px 0 0 0',
    }

    const header2 = {
      width: '100%',
      color: '#4f6d7a',
      fontSize: '30px',
      textAlign: 'center',
      paddingBottom: '50px',
      fontWeight: '700',
      paddingTop: '20px'
    }

    const header3 = {
      fontSize: '20px',
      color: '#e89980'
    }

    const header4 = {
      fontSize: '25px',
      color: '#fff',
      width: '100%',
      textAlign: 'center'
    }

    const header5 = {
      fontSize: '20px',
      color: '#e89980'
    }

    const paragraph = {
      color: '#707070',
      padding: '10px 20px',
      textAlign: 'center'
    }

    const largeImage = {
      height: '100%',
      width: '100%',
      borderRadius: '5px'
    }

    const team = {
      display: 'flex',
      justifyContent: 'space-around'
    }

    const teamMobile = {
      display: 'flex',
      flexDirection: 'column'
    }

    const teamMember = {
      width: '12%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    const teamMemberMobile = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '200',
      padding: '10px 0'
    }

    const teamImage = {
      height: '100px',
      width: '100px',
      border: '3px solid #4f6d7a',
      borderRadius: '50%',
      marginBottom: '20px'
    }

    const FAQ = {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      height: '400px',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '30px 0',
      borderRadius: '10px',
      alignItems: 'center'
    }

    const FAQMobile = {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      height: '550px',
      padding: '15px',
      border: '4px solid #4f6d7a',
      margin: '30px 0',
      borderRadius: '10px',
      alignItems: 'center'
    }

    const learnMore = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '200px',
      backgroundColor: '#4f6d7a',
      paddingTop: '40px'
    }

    const learnButton = {
      width: '20vw',
      height: '10vh',
      border: '2px solid white',
      borderRadius: '5px', 
      backgroundColor: '#4f6d7a',
      fontSize: '17px',
      fontWeight: '500'
    }

    const question = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 0'
    }

    const links = {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '10px'
    }

    const link = {
      textDecoration: 'none',
      color: '#e89980'
    }

    if(props.mobile) {
      return (
        <MobileContainer 
          about 
          style={aboutContainerMobile}
          { ...props }
        >
          <div style={headerContainerMobile}>
                <p style={header1Mobile}>We believe in supporting mothers.</p>
              </div>
              <div style={body}>
                <div style={bigBoxMobile}>
                  <div style={headerMobile}>
                    <p style={header2}>We know it's difficult.</p>
                      <p style={paragraph}>
                        Motherhood is one of the most difficult jobs in the world, and
                        we're here to help. Ride for Life provides easy, trustworthy
                        transportation for women in need. No need to worry about how to
                        get to the hospital. No need to worry about unqualified druvers.
                        Just arrange a ride, and relax.
                      </p>
                  </div>
                  <div style={secondaryMobile}>
                    <img
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80"
                      alt="children"
                      style={largeImage}
                    />
                  </div>
                </div>
                <div style={bigBoxMobile}>
                  <div style={secondaryMobile}>
                    <img
                      src="https://images.unsplash.com/photo-1535950377798-a33c56f5dd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                      alt="tuktuk"
                      style={largeImage}
                    />
                  </div>
                  <div style={headerMobile}>
                    <p style={header2}>Our drivers are trained professionals.</p>
                    <p style={paragraph}>
                      Each of our drivers goes through a rigorous defensive and
                      offensive driving course, as well as basic first aid and CPR. Each
                      one of our drivers has been vetted by our organization. You'll
                      never be getting into an ambulance with a stranger. You'll be
                      getting into an ambulance with family.
                    </p>
                  </div>
                </div>
                <div style={teamBoxMobile}>
                  <p style={header2}>Our Team</p>
                  <div style={teamMobile}>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/1154/1154456.svg"
                        alt="mandi"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Mandi Hamza
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145859.svg"
                        alt="terry"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Terry Gleason
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/701/701996.svg"
                        alt="gil"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Gil Olsen
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145848.svg"
                        alt="douglas"
                        style={teamImage}
                      />
                      <p style={header3}>Douglas Jordan</p>
                      <p style={paragraph}>Front End Development</p>
                    </div>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/702/702011.svg"
                        alt="claire"
                        style={teamImage}
                      />
                      <p style={header3}>Claire Sinozich</p>
                      <p style={paragraph}>Front End Development</p>
                    </div>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/498/498367.svg"
                        alt="lee"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Lee Tann
                      </p>
                      <p style={paragraph}>Back End Development</p>
                    </div>
                    <div style={teamMemberMobile}>
                      <img
                        src="https://image.flaticon.com/icons/svg/219/219974.svg"
                        alt="kyran"
                        style={teamImage}
                      />
                      <p style={header3}>Kyran McCann</p>
                      <p style={paragraph}>Project Lead</p>
                    </div>
                  </div>
                </div>
                <div style={FAQMobile}>
                  <p style={header2}>FAQ</p>
                  <div style={question}>
                    <p style={header5}>How do I sign up?</p>
                    <p style={paragraph}>
                      If you don't have an account yet, sign up <Link to='/signup' style={link}>here</Link> as a driver,
                      mother, or caregiver. If you do have an account, head <Link to='login' style={link}>here </Link> to log
                      in.
                    </p>
                  </div>
                  <div style={question}>
                    <p style={header5}>
                      How do I pay for the rides? How do I get paid for being a driver?
                    </p>
                    <p style={paragraph}>
                      All payments for Ride for Life are handled off-app. Call for more
                      details.
                    </p>
                  </div>
                  <div style={question}>
                    <p style={header5}>Can I schedule a ride in advance?</p>
                    <p style={paragraph}>
                      Unfortunately, we don't have this feature right now! Check back
                      soon for more.
                    </p>
                  </div>
                </div>
                <div style={learnMore}>
                  <p style={header4}>Learn More</p>
                  <div style={links}>
                    <a href='https://loving-curran-d1a71f.netlify.com/'><MobileButton style={learnButton}>Mandi Hamza</MobileButton></a>
                    <a href="https://jolly-northcutt-3df032.netlify.com/"><MobileButton style={learnButton}>Gil Olsen</MobileButton></a>
                    <a href="https://loving-panini-7deb78.netlify.com/"><MobileButton style={learnButton}>Terry Gleason</MobileButton></a>
                  </div>
                </div>
              </div>
        </MobileContainer>
      )
    }
    else return (
      <Container about style={aboutContainer}>
              <div style={headerContainer}>
                <p style={header1}>We believe in supporting mothers.</p>
              </div>
              <div style={body}>
                <div style={bigBox}>
                  <div style={header}>
                    <p style={header2}>We know it's difficult.</p>
                      <p style={paragraph}>
                        Motherhood is one of the most difficult jobs in the world, and
                        we're here to help. Ride for Life provides easy, trustworthy
                        transportation for women in need. No need to worry about how to
                        get to the hospital. No need to worry about unqualified druvers.
                        Just arrange a ride, and relax.
                      </p>
                  </div>
                  <div style={secondary}>
                    <img
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80"
                      alt="children"
                      style={largeImage}
                    />
                  </div>
                </div>
                <div style={bigBox}>
                  <div style={secondary}>
                    <img
                      src="https://images.unsplash.com/photo-1535950377798-a33c56f5dd35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                      alt="tuktuk"
                      style={largeImage}
                    />
                  </div>
                  <div style={header}>
                    <p style={header2}>Our drivers are trained professionals.</p>
                    <p style={paragraph}>
                      Each of our drivers goes through a rigorous defensive and
                      offensive driving course, as well as basic first aid and CPR. Each
                      one of our drivers has been vetted by our organization. You'll
                      never be getting into an ambulance with a stranger. You'll be
                      getting into an ambulance with family.
                    </p>
                  </div>
                </div>
                <div style={teamBox}>
                  <p style={header2}>Our Team</p>
                  <div style={team}>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/1154/1154456.svg"
                        alt="mandi"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Mandi Hamza
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145859.svg"
                        alt="terry"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Terry Gleason
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/701/701996.svg"
                        alt="gil"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Gil Olsen
                      </p>
                      <p style={paragraph}>UI Development</p>
                    </div>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145848.svg"
                        alt="douglas"
                        style={teamImage}
                      />
                      <p style={header3}>Douglas Jordan</p>
                      <p style={paragraph}>Front End Development</p>
                    </div>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/702/702011.svg"
                        alt="claire"
                        style={teamImage}
                      />
                      <p style={header3}>Claire Sinozich</p>
                      <p style={paragraph}>Front End Development</p>
                    </div>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/498/498367.svg"
                        alt="lee"
                        style={teamImage}
                      />
                      <p style={header3}>
                        Lee Tann
                      </p>
                      <p style={paragraph}>Back End Development</p>
                    </div>
                    <div style={teamMember}>
                      <img
                        src="https://image.flaticon.com/icons/svg/219/219974.svg"
                        alt="kyran"
                        style={teamImage}
                      />
                      <p style={header3}>Kyran McCann</p>
                      <p style={paragraph}>Project Lead</p>
                    </div>
                  </div>
                </div>
                <div style={FAQ}>
                  <p style={header2}>FAQ</p>
                  <div style={question}>
                    <p style={header5}>How do I sign up?</p>
                    <p style={paragraph}>
                      If you don't have an account yet, sign up <Link to='/signup' style={link}>here</Link> as a driver,
                      mother, or caregiver. If you do have an account, head <Link to='login' style={link}>here </Link> to log
                      in.
                    </p>
                  </div>
                  <div style={question}>
                    <p style={header5}>
                      How do I pay for the rides? How do I get paid for being a driver?
                    </p>
                    <p style={paragraph}>
                      All payments for Ride for Life are handled off-app. Call for more
                      details.
                    </p>
                  </div>
                  <div style={question}>
                    <p style={header5}>Can I schedule a ride in advance?</p>
                    <p style={paragraph}>
                      Unfortunately, we don't have this feature right now! Check back
                      soon for more.
                    </p>
                  </div>
                </div>
                <div style={learnMore}>
                  <p style={header4}>Learn More</p>
                  <div style={links}>
                    <a href='https://loving-curran-d1a71f.netlify.com/'><Button style={learnButton}>Mandi Hamza</Button></a>
                    <a href="https://jolly-northcutt-3df032.netlify.com/"><Button style={learnButton}>Gil Olsen</Button></a>
                    <a href="https://loving-panini-7deb78.netlify.com/"><Button style={learnButton}>Terry Gleason</Button></a>
                  </div>
                </div>
              </div>
      </Container>
    )
}

export default About;