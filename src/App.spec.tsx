import { render, screen} from "@testing-library/react";
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom';

import App from './App';

describe('App Component', ()=>{
    test('Should render title', () => {
        render (<App />);

        const title = screen.getByRole('heading', {name: 'Hooks do React'});

        expect(title).toBeInTheDocument();
    })
})