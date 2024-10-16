import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import {
  Container,
  Content,
  NavButton,
  NavItem,
  Sidebar,
  CollapseButton,
  ButtonWrapper,
  NavItemsBox,
} from './styled';
import { useRouter } from 'next/router';
import { navItems } from './constant/navItems';
import {
  ChevronsLeft,
  ChevronsRight,
  HelpCircle,
  LogOut,
  Settings,
} from 'react-feather';
import { Divider } from '../divider/styled';
import { Column } from 'components/column/styled';

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  const BoeLogo: string = '/assets/boe-logo03.svg';
  const [isExpanded, setIsExpanded] = React.useState(true);
  const router = useRouter();

  const handleCollapseToggle = React.useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <Container>
      <Sidebar isExpanded={isExpanded}>
        <Column space="2.3rem">
          <Image src={BoeLogo} alt={'boe-logo'} width={30} height={40} />
          <NavItemsBox>
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;

              return (
                <NavItem key={item.path}>
                  <Link href={item.path} passHref legacyBehavior>
                    <NavButton active={isActive} isExpanded={isExpanded}>
                      {item.icon(isActive)} {isExpanded && item.label}
                    </NavButton>
                  </Link>
                </NavItem>
              );
            })}
          </NavItemsBox>
        </Column>

        <NavItemsBox>
          <NavItem>
            <NavButton
              active={router.pathname === '/settings'}
              isExpanded={isExpanded}
            >
              <Settings />
              {isExpanded && 'Extra Route'}
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              active={router.pathname === '/help'}
              isExpanded={isExpanded}
            >
              <HelpCircle />
              {isExpanded && 'Extra Route'}
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              active={router.pathname === '/help'}
              isExpanded={isExpanded}
              onClick={() => {}}
            >
              <LogOut />
              {isExpanded && 'Extra Route'}
            </NavButton>
          </NavItem>

          <Divider />

          <ButtonWrapper isExpanded={isExpanded}>
            <CollapseButton onClick={handleCollapseToggle}>
              {isExpanded ? <ChevronsLeft /> : <ChevronsRight />}
            </CollapseButton>
          </ButtonWrapper>
        </NavItemsBox>
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default SidebarLayout;
