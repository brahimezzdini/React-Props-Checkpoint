

import Profile from './profile/Profile';

function App() {

  

  /******************Inline Style*****************/
  const H1={borderBottom:'2px solid',
            marginTop:'-150px',
            marginBottom:'150px'
           },
        imgStyle={border:'2px solid'
           },
        Container={backgroundColor: '#282c34',
                    minHeight: '100vh', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:' center',
                    justifyContent: 'center',
                    fontSize: 'calc(10px + 2vmin)',
                    color: 'white',
                    textAlign: 'center'
                  },
        Link={top: '81px',
              position: 'relative',
              color: 'cyan',
            }
/***************end inline style***************/

        return (
          <div style={Container}>
            <h1 style={H1}> React Props Checkpoint</h1>
            <Profile fullName='Brahim Ezzdini' bio='@ibra007'  profession='ingenieur' >
              <img style={imgStyle} src={"./img.png"} alt=""/>
            </Profile>
      
            <a style={Link} href="https://github.com/brahimezzdini/React-Props-Checkpoint.git" >  Voir Code source  </a>
          </div>
        );
}

export default App;
