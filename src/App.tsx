import Box from './graph/Box';
import clubLogo from '/Club Logo.png';
import swords from '/Swords.png';
import { SteppedLineTo } from 'react-lineto';

function App() {
  return (
    <>
      <div className="w-screen min-h-screen backdrop-blur-[1px]">
        <div className="flex justify-center items-center m-5 p -5">
          <img src={clubLogo} className="h-20"></img>
          <h1 className="text-white text-4xl font-extrabold m-5 p-3">
            Syntax Showdown
          </h1>
          <img src={swords} className="h-18"></img>
        </div>

        <div className='flex'>
          
          <div>

            <div className='m-10 A'>
              <Box
                player1="adi"
                player2="aneesh"
                color1="#d73546"
                color2="#376189"
                color3="#ffffff"
              />
            </div>

            <div className='m-10 B'>
              <Box
                player1="adi"
                player2="aneesh"
                color1="#d73546"
                color2="#376189"
                color3="#ffffff"
              />
            </div>

          </div>

            <div className='m-30 A'>
                <Box
                    player1="adi"
                    player2="aneesh"
                    color1="#d73546"
                    color2="#376189"
                    color3="#ffffff"
                  />
            </div>
          <SteppedLineTo from='m-10 A' zIndex={0} borderColor='white' to='m-30 A' orientation='h' borderWidth={10} />
          <SteppedLineTo from='m-10 B' borderColor='white' zIndex={0} to='m-30 A' orientation='h' borderWidth={10} />
        </div>

        <div>
          <div className='flex'>
            
            <div>

              <div className='m-10 C'>
                <Box
                  player1="adi"
                  player2="aneesh"
                  color1="#d73546"
                  color2="#376189"
                  color3="#ffffff"
                />
              </div>

              <div className='m-10 D'>
                <Box
                  player1="adi"
                  player2="aneesh"
                  color1="#d73546"
                  color2="#376189"
                  color3="#ffffff"
                />
              </div>

            </div>

              <div className='m-30 B'>
                  <Box
                      player1="adi"
                      player2="aneesh"
                      color1="#d73546"
                      color2="#376189"
                      color3="#ffffff"
                    />
              </div>
            <SteppedLineTo from='m-10 C' zIndex={0} borderColor='white' to='m-30 B' orientation='h' borderWidth={10} />
            <SteppedLineTo from='m-10 D' borderColor='white' zIndex={0} to='m-30 B' orientation='h' borderWidth={10} />
          </div>

          <div>
            <div className='flex'>
              <div>

                <div className='m-10 E'>
                  <Box
                    player1="adi"
                    player2="aneesh"
                    color1="#d73546"
                    color2="#376189"
                    color3="#ffffff"
                  />
                </div>

                <div className='m-10 F'>
                  <Box
                    player1="adi"
                    player2="aneesh"
                    color1="#d73546"
                    color2="#376189"
                    color3="#ffffff"
                  />
                </div>

              </div>

                <div className='m-30 C'>
                    <Box
                        player1="adi"
                        player2="aneesh"
                        color1="#d73546"
                        color2="#376189"
                        color3="#ffffff"
                      />
                </div>
              <SteppedLineTo from='m-10 E' zIndex={0} borderColor='white' to='m-30 C' orientation='h' borderWidth={10} />
              <SteppedLineTo from='m-10 F' borderColor='white' zIndex={0} to='m-30 C' orientation='h' borderWidth={10} />
            </div>
          </div>

          <div>
          <div className='flex'>
              <div>

                <div className='m-10 G'>
                  <Box
                    player1="adi"
                    player2="aneesh"
                    color1="#d73546"
                    color2="#376189"
                    color3="#ffffff"
                  />
                </div>

                <div className='m-10 H'>
                  <Box
                    player1="adi"
                    player2="aneesh"
                    color1="#d73546"
                    color2="#376189"
                    color3="#ffffff"
                  />
                </div>

              </div>

                <div className='m-30 D'>
                    <Box
                        player1="adi"
                        player2="aneesh"
                        color1="#d73546"
                        color2="#376189"
                        color3="#ffffff"
                      />
                </div>
              <SteppedLineTo from='m-10 G' zIndex={0} borderColor='white' to='m-30 D' orientation='h' borderWidth={10} />
              <SteppedLineTo from='m-10 H' borderColor='white' zIndex={0} to='m-30 D' orientation='h' borderWidth={10} />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
