import BaseWidget from "./method";

function view(viewModel: WidgetWithApiRef) { return <BaseWidget ref={viewModel.baseRef} prop1={viewModel.props.prop1}></BaseWidget>;}

export declare type WidgetWithApiRefInputType = {
    prop1?: number
}
const WidgetWithApiRefInput: WidgetWithApiRefInputType = { };

import { WidgetRef as BaseWidgetRef } from "./method";
import React, { useCallback, useRef, useImperativeHandle, forwardRef } from "react";

export type WidgetWithApiRefRef = {
    getSomething: () => string
};

interface WidgetWithApiRef {
    props: WidgetWithApiRefInputType;
    baseRef: any;
    restAttributes: any;
}

const WidgetWithApiRef = forwardRef<WidgetWithApiRefRef, WidgetWithApiRefInputType>((props: WidgetWithApiRefInputType, ref) => {
    const baseRef = useRef<BaseWidgetRef>();

    useImperativeHandle(ref, () => ({
        getSomething: () => { 
            return `${props.prop1} + ${baseRef.current?.getHeight()}`;
        }
    }), [props.prop1, baseRef.current]);
    const __restAttributes=useCallback(function __restAttributes(){
        const { prop1, ...restProps } = props;
        return restProps;
    }, [props]);

    return view(({
        props: { ...props },
        baseRef,
        restAttributes: __restAttributes()
    }));
});

export default WidgetWithApiRef;

WidgetWithApiRef.defaultProps = {
    ...WidgetWithApiRefInput
}
