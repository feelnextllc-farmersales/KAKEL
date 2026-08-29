/*
  KAKEL 設定ファイル
  ------------------------------------------------------------
  Stripe・Supabaseの接続情報はすべてここに集約しています。
  値を埋めるだけで sponsor.html / admin.html / index.html が
  自動的に本番接続に切り替わる構成です。

  ここにはコードは書かず、値の設定だけを行ってください。
*/
window.KAKEL_CONFIG = {

  // ---- Stripe --------------------------------------------
  // Stripeダッシュボード → 「支払いリンク」で
  // 「スポンサー掲載（年間）55,000円」の支払いリンクを作成し、
  // そのURLをここに貼り付けてください。
  // 支払いリンクの詳細設定で「支払い後の遷移先」を
  //   https://あなたのドメイン/sponsor-thanks.html?session_id={CHECKOUT_SESSION_ID}
  // に設定しておくと、決済完了後に自動でお礼画面へ戻ります。
  stripePaymentLinkUrl: "", // 例: "https://buy.stripe.com/xxxxxxxx"

  // ---- Supabase -------------------------------------------
  // プロジェクト設定 → API から取得できます。
  // anonKeyは公開しても問題のない「anon / public」キーのみを使用してください
  // （service_role キーは絶対にフロントエンドに置かないでください）。
  supabaseUrl: "",     // 例: "https://xxxxxxxxxxx.supabase.co"
  supabaseAnonKey: "", // 例: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."

  // ---- スパム対策 -------------------------------------------
  // hCaptchaを導入する場合はサイトキーを設定してください（任意）。
  // 未設定の場合はハニーポット＋タイムトラップのみで動作します。
  hcaptchaSiteKey: ""
};
