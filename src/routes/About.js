import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'

import { H2 as DefaultH2, Title } from '../components/Typography/Basic'
import Anchor from '../components/Icons/Anchor'
import slugify from 'slugify'
import ReverseRecordImageSrc from '../assets/reverseRecordImage.png'

const H2 = styled(DefaultH2)`
  margin-top: 50px;
  margin-left: 20px;
  ${mq.medium`
    margin-left: 0;
  `}
`

const Question = styled('h3')`
  font-size: 15px;
  margin-right: 0.5em;
  display: inline;
`

const Answer = styled('p')``

const AnchorContainer = styled(`a`)``

const ImageContainer = styled('div')`
  margin: 2em;
`

const ReverseRecordImage = styled('img')`
  width: 100%;
  ${mq.medium`
    width: 600px;
  `}
`

const Section = ({ question, children }) => {
  let slug
  if (question) {
    slug = slugify(question, {
      lower: true
    })
  }
  return (
    <>
      <Question id={slug}>{question}</Question>
      <AnchorContainer href={`#${slug}`}>
        <Anchor />
      </AnchorContainer>

      <Answer>{children}</Answer>
    </>
  )
}

function Faq() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'About .badass'
  }, [])

  return (
    <FaqContainer>
      <Title>About</Title>
      <H2>
        Created by <a href="https://impervious.com">Impervious</a>
      </H2>

      <p>
        .badass improves on existing decentralized domain names by planting them
        in a decentralized root zone. .badass is a top-level domain on the{' '}
        <a href="https://handshake.org">Handshake blockchain</a>. Handshake is a
        decentralized root zone which aims to free the internet from its current
        custodians.
      </p>

      <p>
        We have forked <a href="https://ens.domains">ENS</a> for this purpose.
      </p>

      <p>All Ethereum contract code can be verified on etherscan:</p>

      <p>
        <ul>
          <li>
            ENSRegistry contract address:{' '}
            <a href="https://etherscan.io/address/0x36fc69f0983E536D1787cC83f481581f22CCA2A1#code">
              0x36fc69f0983E536D1787cC83f481581f22CCA2A1
            </a>
          </li>
          <li>
            BaseRegistrarImplementation contract address:{' '}
            <a href="https://etherscan.io/address/0xa271897710a2B22f7A5bE5fEaCb00811d960e0b8#code">
              0xa271897710a2B22f7A5bE5fEaCb00811d960e0b8
            </a>
          </li>
          <li>
            PublicResolver contract address:{' '}
            <a href="https://etherscan.io/address/0x0d5BbCcB9DF4689400c70F8206333c5Ce8720f58#code">
              0x0d5BbCcB9DF4689400c70F8206333c5Ce8720f58
            </a>
          </li>
          <li>
            ETHRegistrarController contract address:{' '}
            <a href="https://etherscan.io/address/0x82994379b1ec951c8e001dfcec2a7ce8f4f39b97#code">
              0x82994379b1ec951c8e001dfcec2a7ce8f4f39b97
            </a>
          </li>
        </ul>
      </p>

      <p>
        All code is <a href="https://github.com/imperviousinc">open source</a>,
        along with instructions on how to deploy for your own Handshake TLD
      </p>
    </FaqContainer>
  )
}

const FaqContainer = styled('div')`
  margin: 1em;
  padding: 20px 40px;
  background-color: white;
`

export default Faq
