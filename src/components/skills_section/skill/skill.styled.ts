import styled, { keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

const keyframe = keyframes`
    0% {
    transform: scaleY(0) scaleX(.1);
    }
    50% {
        transform: scaleY(1) scaleX(.1);
    }
    100% {
        transform: scaleX(1) scaleY(1);
    }
`;

const animation = (delay: number): FlattenSimpleInterpolation => css`
    ${keyframe} .5s ${delay}s forwards;
`;

const Skill = styled.div<SkillType>`
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    position: relative;
    width: 100px;
    height: 100px;
    color: ${({ theme }) => theme};
    margin: 30px;
    background: rgb(11, 12, 16);
     * {
        -webkit-tap-highlight-color: transparent;
    }
    img, div {
        transition: .3s;
    }
    img {
        height: 90px;
        vertical-align: middle;
        user-select: none;
        -webkit-user-select: none;
    }
    ::before, ::after {
        position: absolute;
        content: '';
        z-index: -1;
        background: ${({ theme }) => theme};
        transform: scale(0);
    }
    ::before {
        transform-origin: right top;
        width: 104px;
        height: 104px;
        right: -4px;
        bottom: -4px;
        animation: ${({ wasShown }) => wasShown && animation(.3) }
    }
    ::after {
        transform-origin: left bottom;
        width: 108px;
        height: 108px;
        left: -4px;
        top: -4px;
        animation: ${({ wasShown }) => wasShown && animation(.8) }
    }
`;

export const SkillNameContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    background: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover, &:active {
        cursor: pointer;
        opacity: 1;
    }
    & > span {
        user-select: none;
    }
`;

type SkillType = {
    theme: string,
    wasShown: boolean,
}

export default Skill;