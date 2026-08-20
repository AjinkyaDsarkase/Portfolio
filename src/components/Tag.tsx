interface TagProps {
  children: string;
}

// Small pill chip used for skills and project tech stacks.
export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-sm font-medium text-accent-700 ring-1 ring-inset ring-accent-200 dark:bg-accent-950 dark:text-accent-300 dark:ring-accent-800">
      {children}
    </span>
  );
}
