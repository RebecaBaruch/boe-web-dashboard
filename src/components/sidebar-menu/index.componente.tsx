import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  Container,
  Content,
  NavButton,
  NavItem,
  Sidebar,
  CollapseButton,
  ButtonWrapper,
} from './styled';
import { useRouter } from 'next/router';
import { navItems } from './constant/navItems';
import { ChevronsLeft, ChevronsRight } from 'react-feather';

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const router = useRouter();

  const handleCollapseToggle = React.useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <Container>
      <Sidebar isExpanded={isExpanded}>
        <ButtonWrapper isExpanded={isExpanded}>
          <CollapseButton onClick={handleCollapseToggle}>
            {isExpanded ? <ChevronsLeft /> : <ChevronsRight />}
          </CollapseButton>
        </ButtonWrapper>

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
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default SidebarLayout;
