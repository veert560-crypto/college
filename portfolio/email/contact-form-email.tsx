import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  otp?: string; // now we pass OTP
};

export default function ContactFormEmail({
  message,
  senderEmail,
  otp,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>

            {/* hidden anti-spam metadata */}
            <Section>
              <Text
                style={{
                  opacity: 0,
                  fontSize: "1px",
                  lineHeight: "1px",
                  display: "none",
                  maxHeight: 0,
                  maxWidth: 0,
                  overflow: "hidden",
                }}
              >
                Security OTP: {otp}
              </Text>
              <Text
                style={{
                  opacity: 0.02,
                  fontSize: "1px",
                  display: "block",
                  maxHeight: 0,
                  maxWidth: 0,
                  overflow: "hidden",
                }}
              >
                Transactional Update | Contact Form | User Authenticated | ID: {Math.random().toString(36).substring(2)}
              </Text>
            </Section>

            <Section className="bg-white border border-gray-200 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                New Message Received
              </Heading>

              <Text>
                You have received the following message from your portfolio contact form:
              </Text>

              <Text className="mt-2">{message}</Text>

              <Hr />

              <Text>Sender Email: <b>{senderEmail}</b></Text>


            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
