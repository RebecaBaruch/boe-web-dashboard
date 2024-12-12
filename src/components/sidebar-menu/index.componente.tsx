import React, { useState, useCallback } from 'react';
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
  BoeText,
  Viewboard,
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
import { Column } from '../column/styled';
import { Row } from '../row/styled';
import TopDashboardBar from '../top-dashboard-bar';
import { useLoginContext } from '../../context/login-context';
import LoadingComponent from '../loading/loading.component';
import { RoutesUrls } from '../../utils/enums/routes-url';

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  const BoeLogo: string = '/assets/boe-logo03.svg';
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setLoginData } = useLoginContext();

  const handleCollapseToggle = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    setLoginData({ name: '', email: '', jwt: '' });
    localStorage.removeItem('jwt');

    setIsLoading(true);

    router.push(RoutesUrls.LOGIN).then(() => {
      setIsLoading(false);
    });
  }, [setLoginData, router]);

  return (
    <Container>
      {isLoading && <LoadingComponent />}
      <Sidebar isExpanded={isExpanded}>
        <Column space="1.9rem">
          <Row align={isExpanded ? undefined : 'center'}>
            <Image src={BoeLogo} alt={'boe-logo'} width={20} height={30} />

            {isExpanded && <BoeText isVisible={isExpanded} />}
          </Row>
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
              <Settings width={20} />
              {isExpanded && 'Configurações'}
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              active={router.pathname === '/help'}
              isExpanded={isExpanded}
            >
              <HelpCircle width={20} />
              {isExpanded && 'Ajuda'}
            </NavButton>
          </NavItem>

          <NavItem>
            <NavButton
              isExpanded={isExpanded}
              onClick={onLogout}
              disabled={isLoading}
            >
              <LogOut width={20} />
              {isExpanded && 'Log out'}
            </NavButton>
          </NavItem>

          <Divider />

          <ButtonWrapper isExpanded={isExpanded}>
            <CollapseButton onClick={handleCollapseToggle}>
              {isExpanded ? (
                <ChevronsLeft width={20} />
              ) : (
                <ChevronsRight width={20} />
              )}
            </CollapseButton>
          </ButtonWrapper>
        </NavItemsBox>
      </Sidebar>

      <Viewboard>
        <TopDashboardBar />
        <Content>{children}</Content>
      </Viewboard>
    </Container>
  );
};

export default SidebarLayout;
