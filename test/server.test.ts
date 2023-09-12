import { expect, test } from "bun:test";
import http from 'http'

test("tutorial: 2 + 2", () => {
    expect(2 + 2).toBe(4);
});

test("http on '/'", () => {
    http
})

// TODO IDK HOW TO TEST HTTP IN BUN!!!!!!!!!!!!