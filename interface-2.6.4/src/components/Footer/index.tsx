import { useRef } from 'react'
import { BookOpen, Code, Info, MessageCircle, PieChart } from 'react-feather'
import styled from 'styled-components'
import React from 'react'
import { ExternalLink } from '../../theme'
import telegram from '../../assets/logo/telegram.svg'

const StyledFooter = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  text-align: left;
`

const FooterItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Align buttons horizontally at the center */
  gap: 10px; /* Add some space between buttons */
`

const CODE_LINK = 'https://github.com/Uniswap/uniswap-interface'

export default function Footer() {
  const node = useRef<HTMLDivElement>()

  return (
    <StyledFooter ref={node as any}>
      <div>
        <FooterItem id="link" href="https://ramascan.com/">
          <Info size={14} />
          About
        </FooterItem>
        <FooterItem id="link" href="https://docs.ramestta.com/">
          <BookOpen size={14} />
          Docs
        </FooterItem>
        <FooterItem id="link" href={CODE_LINK}>
          <Code size={14} />
          Code
        </FooterItem>
        <FooterItem id="link" href="https://discord.gg/EwFs3Pp">
          <MessageCircle size={14} />
          Discord
        </FooterItem>
        <FooterItem id="link" href="https://uniswap.info/">
          <PieChart size={14} />
          Analytics
        </FooterItem>
        <ButtonContainer>
          {/* Example buttons */}
          <button><img src={telegram} /></button>
          <button>Button 2</button>
          <button>Button 3</button>
        </ButtonContainer>
      </div>
    </StyledFooter>
  )
}
