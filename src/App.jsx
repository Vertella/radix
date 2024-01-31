//import { useState } from 'react'
import './App.css'
import '@radix-ui/themes/styles.css';
import { Theme, Button, Card, Text, Flex, Box, DropdownMenu, TextField, Heading, Popover, Avatar, Tabs } from '@radix-ui/themes'
import '@radix-ui/react-icons'
import { ChevronUpIcon, ChevronDownIcon, CalendarIcon, PersonIcon, CardStackIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Overview } from './Overview.jsx';

export default () => (
  <Theme>
    <Box className='container'>
    <Card>
      <Card>
        <Flex direction='row' align='center' justify='between' gap='9'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Card size='1'>
                <Flex gap='8' direction='row' align='center'>
                  <Box>
                    <Flex gap='2' align='center'>
                      <Avatar src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1540586018564-IFXXO5S24HBJB28MLA4W/character_head.jpg?format=2500w' radius='full' fallback='A' />
                      <Text weight='bold'>Monsters Inc</Text>
                    </Flex>
                  </Box>
                  <Flex direction='column'>
                    <ChevronUpIcon />
                    <ChevronDownIcon />
                  </Flex>
                </Flex>
              </Card>
            </DropdownMenu.Trigger>
          </DropdownMenu.Root>
          <Tabs.Root defaultValue="overview1">
            <Tabs.List>
            <Tabs.Trigger value="overview1">Overview</Tabs.Trigger>
            <Tabs.Trigger value="customers">Customers</Tabs.Trigger>
            <Tabs.Trigger value="products">Products</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
          <Box size='9' width='9'></Box>
          <Box>
            <Flex gap='3'>
              <TextField.Input size='3' placeholder="Search…"/>
              <Avatar src='https://miro.medium.com/v2/resize:fit:600/1*XVEFEXtyUS1nV1YOykXV0g.jpeg' radius='full' fallback='A' />
            </Flex>
          </Box> 
        </Flex>
      </Card>
        <Flex gap='4' m='3' wrap='wrap' direction='column'>
          <Box direction='row' mt='3'>
            <Flex align='center' justify='between'>
              <Heading size='8'> Dashboard </Heading>
              <Box>
                <Popover.Root>
                  <Popover.Trigger>
                    <Button>
                      <CalendarIcon></CalendarIcon>
                      <Text>Jan 20, 2023 - Feb 09, 2023</Text>
                    </Button>
                  </Popover.Trigger>
                </Popover.Root>
                <Button ml='2'>
                  <Text>Download</Text>
                </Button>
              </Box>
              
            </Flex>
          </Box>
          <Flex>
            <Card size='1'>
              <Flex gap='3' align='center' direction='row'>
                <Button>Overview</Button>
                <Text>Analytics</Text>
                <Text>Report</Text>
                <Text>Notifications</Text>
              </Flex>
            </Card>
          </Flex>
          <Box>
            <Flex gap='3' direction='row'>
              {/* Total Revenue */}
              <Card size='3'>
                <Flex gap='2' align='left' direction='column'>
                  <Box>
                    <Flex gap='9'>
                      <Heading size='4'>Total Revenue</Heading>
                      <Box size='3'></Box>
                      <Text>$</Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex direction='column'>
                      <Text size='7' weight='bold'>$45,231.89</Text>
                      <Text size='2'>+20.1% from last month</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Card>
              {/* Subscriptions */}
              <Card size='3'>
                <Flex gap='3' align='left' direction='column'>
                  <Box>
                    <Flex gap='9'>
                      <Heading size='4'>Subscriptions</Heading>
                      <Box size='3'></Box>
                      <PersonIcon />
                    </Flex>
                  </Box>
                  <Box>
                    <Flex direction='column'>
                      <Text size='7' weight='bold'>+2350</Text>
                      <Text size='2'>+180.1% from last month</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Card>
              {/* Sales */}
              <Card size='3'>
                <Flex gap='2' align='left' direction='column'>
                <Box>
                  <Flex gap='9'>
                    <Heading size='4'>Sales</Heading>
                    <Box size='3'></Box>
                    <Box size='3'></Box>
                    <CardStackIcon />
                  </Flex>
                </Box>
                <Box>
                  <Flex direction='column'>
                    <Text size='7' weight='bold'>+12,234</Text>
                    <Text>+19% from last month</Text>
                  </Flex>
                </Box>
                </Flex>
              </Card>
              {/* Active Now */}
              <Card size='3'>
                <Flex gap='2' align='left' direction='column'>
                  <Box>
                    <Flex gap='9'>
                      <Heading size='4'>Active Now</Heading>
                      <Box size='3'></Box>
                      <ArrowTopRightIcon />
                    </Flex>
                  </Box>
                  <Box>
                    <Flex direction='column'>
                      <Text size='7' weight='bold'>+573</Text>
                      <Text>+201 since last hour</Text>
                    </Flex>
                    </Box>
                </Flex>
              </Card>
            </Flex>
          </Box>
          <Box>
            <Flex direction='row' gap='4'>
              {/* Graph */}
              <Box width='100%'>
                <Card size='4'>
                  <Heading size='4'>Overview</Heading>
                  <Overview /> 
                </Card>
              </Box>
              {/* Recent sales */}
              <Card>
                <Box mb='3'>
                  <Heading size='4'>Recent Sales</Heading>
                  <Text>You made 265 sales this month.</Text>
                </Box>

                {/* People in recent sales */}
                <Flex direction='row' gap='9'>
                  <Box>
                    <Flex direction='column' gap='6'> 
                    <Box> {/* Person 1 */}
                      <Flex direction='row' gap='4'>
                        <Avatar src='https://i.imgur.com/blRkjW1.jpg?2' radius='full' fallback='A' />
                        <Flex direction='column'>
                          <Heading size='3'>Olivia Martin</Heading>
                          <Text>olivia.martin@email.com</Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box> {/* Person 2 */}
                      <Flex direction='row' gap='4'>
                        <Avatar src='https://i.imgur.com/A2elFGw.jpg' radius='full' fallback='A' />
                        <Flex direction='column'>
                          <Heading size='3'>Jackson Lee</Heading>
                          <Text>jackson.lee@email.com</Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box> {/* Person 3 */}
                      <Flex direction='row' gap='4'>
                        <Avatar src='https://cdn.discordapp.com/attachments/1167183016343375913/1197897175762477176/received_442599228108846.jpg?ex=65c62a2e&is=65b3b52e&hm=b72d169299554ae603c86e25a66cb41f1ae557fb0bbbdbce12d227849fe0588c&' radius='full' fallback='A' />
                        <Flex direction='column'>
                          <Heading size='3'>Isabella Nguyen</Heading>
                          <Text>isabella.nguyen@email.com</Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box> {/* Person 4 */}
                      <Flex direction='row' gap='4'>
                        <Avatar src='https://cdn.discordapp.com/attachments/1167183016343375913/1199011902718742548/image.png?ex=65ca385a&is=65b7c35a&hm=d3265b0a67a1e926b01e135d6fc2ab2e7995652815103b7d499f5763ad9a2b11&' radius='full' fallback='A' />
                        <Flex direction='column'>
                          <Heading size='3'>William Kim</Heading>
                          <Text>will@email.com</Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box> {/* Person 5 */}
                      <Flex direction='row' gap='4'>
                        <Avatar src='https://cdn.discordapp.com/attachments/329978392285806592/1201917735164973116/20240130_165146.jpg?ex=65cb901e&is=65b91b1e&hm=eb79acf9b409e4e6ccf52d089bab068b2900ffde16c9b869807f53563628682f&' radius='full' fallback='A' />
                        <Flex direction='column'>
                          <Heading size='3'>Sofia Davis</Heading>
                          <Text>sofia.davis@email.com</Text>
                        </Flex>
                      </Flex>
                    </Box>
                    </Flex>
                  </Box>
                  <Flex direction='column' justify='between' align='end' mb='4'>
                    <Box>
                      <Text weight='bold' size='4'>+$1,999.00</Text>
                    </Box>
                    <Box>
                      <Text weight='bold' size='4'>+$39.00</Text>
                    </Box>
                    <Box>
                      <Text weight='bold' size='4'>+$299.00</Text>
                    </Box>
                    <Box>
                      <Text weight='bold' size='4'>+$99.00</Text>
                    </Box>
                    <Box>
                      <Text weight='bold' size='4'>+$39.00</Text>
                    </Box>

                  </Flex>
                </Flex>
              </Card>
            </Flex>
            
          </Box>
        </Flex>
      </Card>
    </Box>
  </Theme>
)