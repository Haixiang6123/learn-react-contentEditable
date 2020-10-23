import * as React from "react"
import {createElement, FC, MutableRefObject, useRef} from "react"

type TTag = 'div' | 'p' | 'span';
type TElement = HTMLDivElement | HTMLParagraphElement | HTMLSpanElement

type IProps = {
  tag?: TTag;
  ref?: MutableRefObject<TElement>;
  value: string;
  disabled?: boolean;
  onBlur?: () => void;
  onInput?: (value: string) => void;
}

const VarInput: FC<IProps> = (props) => {
  const { value, tag, disabled, onInput, ref, ...restProps } = props;

  const innerRef = useRef(null);

  const curtRef = ref || innerRef;

  const emitChange = () => {
    const callbackValue: string = curtRef.current ? curtRef.current.innerHTML : '';

    onInput!(callbackValue);
  }

  const varInputProps = {
    ...restProps,
    ref: curtRef,
    contentEditable: !disabled,
    onInput: emitChange,
    dangerouslySetInnerHTML: { __html: value }
  }

  return createElement(tag || 'div', varInputProps);
}

VarInput.defaultProps = {
  tag: 'div',
  value: '',
  disabled: false,
  onBlur: () => {},
  onInput: () => {},
}

export default VarInput
