<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Decisions

- Single-page site: all sections live in `src/routes/index.tsx` with hash
  navigation (#opcoes) — the user asked for one scrolling page. Why: brief
  specifies "Página Única" with a CTA that scrolls to the offers.
- Design system in `src/styles.css`: dark luxe (espresso bg, champagne gold
  primary, Fraunces display + Manrope body). Why: premium executive positioning.
