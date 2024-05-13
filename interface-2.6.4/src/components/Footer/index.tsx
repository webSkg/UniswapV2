import { useRef } from 'react'
import { BookOpen, Code, Info, MessageCircle, PieChart } from 'react-feather'
import styled from 'styled-components'
import React from 'react'
import { ExternalLink } from '../../theme'

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
        </div>
    </StyledFooter>
  )
}
