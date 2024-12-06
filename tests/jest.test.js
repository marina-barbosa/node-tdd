test('devo conhecer as principais assertions/matchers do jest', () => {
	expect(null).toBeNull();
	expect(1 + 1).toBe(2);
	expect(1 + 1).not.toBe(3);
	expect(1 + 1).toEqual(2);
	expect(1 + 1).toBeGreaterThan(1);
	expect(1 + 1).toBeGreaterThanOrEqual(2);
	expect(1 + 1).toBeLessThan(3);
	expect(1 + 1).toBeLessThanOrEqual(3);
});

test('devo saber trabalhar com objetos', () => {
	const obj = { name: 'John', age: 30, job: 'Developer' };
	const obj2 = { name: 'John', age: 30, job: 'Developer' };
	expect(obj).toEqual({ name: 'John', age: 30, job: 'Developer' });
	expect(obj).toHaveProperty('name', 'John');
	expect(obj).toHaveProperty('job');
	expect(obj).not.toHaveProperty('phone');
	expect(obj.age).toBe(30);
	expect(obj).not.toBe(obj2);
	expect(obj).toEqual(obj2);
});
